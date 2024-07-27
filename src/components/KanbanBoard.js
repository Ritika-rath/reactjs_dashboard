import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// Styled components
const KanbanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

const Column = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  width: 30%;
  min-height: 400px; /* Ensure columns have a minimum height */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ColumnTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2em;
`

const Task = styled.div`
  background: white;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

// Initial data for Kanban Board
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
    'task-4': { id: 'task-4', content: 'Task 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

// Kanban Board Component
const KanbanBoard = () => {
  const [state, setState] = useState(initialData)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }

      setState(newState)
      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }

    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Kanban Board
        </h1>
        <KanbanWrapper>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId]
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId])

            return (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <Column ref={provided.innerRef} {...provided.droppableProps}>
                    <ColumnTitle>{column.title}</ColumnTitle>
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <Task
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.content}
                          </Task>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Column>
                )}
              </Droppable>
            )
          })}
        </KanbanWrapper>
      </div>
    </DragDropContext>
  )
}

export default KanbanBoard
