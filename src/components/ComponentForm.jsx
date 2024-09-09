import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const ComponentForm = () => {
    const initialForm = {
        userName: "",
        email: "",
        password: ""
      }
    const {formState, onInputChange} = useForm(initialForm)

    const { userName, email, password } = formState

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input type="text"
                    className="form-control"
                    name="userName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your username" 
                    value={userName}
                    onChange={onInputChange}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email" 
                    value={email}
                    onChange={onInputChange}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password" 
                    value={password}
                    onChange={onInputChange}
                    />
            </div>
            <button type="submit"
                className="btn btn-primary">Submit</button>
        </form>
    )
}
