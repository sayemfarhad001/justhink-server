const express = require("express");
const dashboardRoutes = express.Router();
const fs = require("fs");
const userList = "data/users.json";

const pullData = (jsonPath) => {
    const dataJSON = fs.readFileSync(jsonPath);
    const data = JSON.parse(dataJSON);
    return data;
};

dashboardRoutes.get("/", (_, res) => {
    res.json(pullData(userList));
});

dashboardRoutes.get("/:id", (req, res) => {
    const fullUsersData = pullData(userList);
    const selected = fullUsersData.find((item) => item.id === req.params.id);
  
    res.json({
        id: selected.id,
        name: selected.name,
        username: selected.username,
        status: selected.status,
        workfrom: selected.workfrom,
        address: selected.address,
        comfort: selected.comfort,
        role: selected.role,
        skills: selected.skills,
        allskills: selected.allskills,
        office: selected.office,
        city: selected.city,
        country: selected.country,
        phone: selected.phone,
        email: selected.email,
        calendar: selected.calendar,
    });
});


module.exports = dashboardRoutes;