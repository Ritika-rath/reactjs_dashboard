import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const FormHeading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`

const TableCellLabel = styled.td`
  padding: 10px;
  text-align: right;
  font-weight: bold;
`

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9em;
  margin-left: 10px;
`

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.firstName) tempErrors.firstName = 'First Name is required'
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required'
    if (!formData.username) tempErrors.username = 'Username is required'
    if (!formData.email) tempErrors.email = 'E-mail is required'
    if (!formData.password) tempErrors.password = 'Password is required'
    if (!formData.phoneNo) tempErrors.phoneNo = 'Phone No. is required'
    if (!formData.country) tempErrors.country = 'Country is required'
    if (!formData.city) tempErrors.city = 'City is required'
    if (!formData.panNo) tempErrors.panNo = 'Pan No. is required'
    if (!formData.aadharNo) tempErrors.aadharNo = 'Aadhar No. is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const renderCities = () => {
    switch (formData.country) {
      case 'USA':
        return (
          <>
            <option value='New York'>New York</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Chicago'>Chicago</option>
          </>
        )
      case 'India':
        return (
          <>
            <option value='Mumbai'>Mumbai</option>
            <option value='Delhi'>Delhi</option>
            <option value='Bangalore'>Bangalore</option>
          </>
        )
      default:
        return <option value=''>Select City</option>
    }
  }

  return (
    <FormContainer>
      <FormHeading>Form</FormHeading>
      {submitted ? (
        <div>
          <h2>Form Details</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <StyledTable>
            <tbody>
              <TableRow>
                <TableCellLabel>First Name</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <ErrorMessage>{errors.firstName}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Last Name</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <ErrorMessage>{errors.lastName}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Username</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <ErrorMessage>{errors.username}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>E-mail</TableCellLabel>
                <TableCell>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Password</TableCellLabel>
                <TableCell>
                  <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Phone No.</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='phoneNo'
                    value={formData.phoneNo}
                    onChange={handleChange}
                  />
                  {errors.phoneNo && (
                    <ErrorMessage>{errors.phoneNo}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Country</TableCellLabel>
                <TableCell>
                  <select
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value=''>Select Country</option>
                    <option value='USA'>USA</option>
                    <option value='India'>India</option>
                  </select>
                  {errors.country && (
                    <ErrorMessage>{errors.country}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>City</TableCellLabel>
                <TableCell>
                  <select
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value=''>Select City</option>
                    {renderCities()}
                  </select>
                  {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Pan No.</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='panNo'
                    value={formData.panNo}
                    onChange={handleChange}
                  />
                  {errors.panNo && <ErrorMessage>{errors.panNo}</ErrorMessage>}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellLabel>Aadhar No.</TableCellLabel>
                <TableCell>
                  <input
                    type='text'
                    name='aadharNo'
                    value={formData.aadharNo}
                    onChange={handleChange}
                  />
                  {errors.aadharNo && (
                    <ErrorMessage>{errors.aadharNo}</ErrorMessage>
                  )}
                </TableCell>
              </TableRow>
            </tbody>
          </StyledTable>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </form>
      )}
    </FormContainer>
  )
}

export default Form
