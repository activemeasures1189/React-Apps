import React from "react";
import Card from "../UI/Card";
import classes from '../User/UserList.module.css'

const UserList = (props)=>{
    return(
        <Card className={classes.users}>
        <ul>
                {props.users.map(user => {
                    return <li key={user.id} >
                        {user.name} ({user.age} Years old)
                    </li>
                })}
        </ul>
        </Card>
    )

}

export default UserList