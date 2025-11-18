"use strict";
{
    const getPropertyValue = (obj, key) => {
        // Y extends "id" | "name" | "email"
        return obj[key];
    };
    const user = {
        id: 101,
        name: "Kawsar",
        email: "kawsar@gmail.com"
    };
    const result = getPropertyValue(user, "name");
    //
}
