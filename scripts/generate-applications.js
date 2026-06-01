const fs = require('fs')
const path = require('path')
const faker = require('@faker-js/faker').faker


const generateApplication = () => {
    let application = {}
    application.id = faker.number.int({min: 123456, max: 999999})

    application.personalDetails = {}
    application.personalDetails.firstName = faker.person.firstName()
    application.personalDetails.lastName = faker.person.lastName()
    application.personalDetails.emailAddress = `${application.personalDetails.firstName.toLowerCase()}.${application.personalDetails.lastName.toLowerCase()}@example.com`
    application.personalDetails.phoneNumber = faker.phone.number('079## ### ###')
    application.personalDetails.address = {
        line1: '1 The Avenue',
        town: 'London',
        postcode: 'W9 1ST'
    }
    //experience

    //evidence


    return application 
}


const generateApplications = () => {
    const applications = []

    for(let i = 0; i < 100; i++) {
        applications.push(generateApplication())
    }

    return applications
}

const generateApplicationsFile = (filePath) => {
    const applications = generateApplications()
    const filedata = JSON.stringify(applications, null, 2)
    fs.writeFile(
        filePath,
        filedata,
        (error) => {
            if (error) {
                console.error(error)
            }
            console.log(`Applications generated: ${filePath}`)
        }
    )
}

generateApplicationsFile(path.join(__dirname, '../app/data/applications.json'))   