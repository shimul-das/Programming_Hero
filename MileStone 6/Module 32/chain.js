const users=[
    {
        id:1,
        name:'abul',
        job:'doctor'
    }
]
console.log(users[0].name);

const data = {
    count: 5000,
    data:[
        {
            id:1,
            name:'babul',
            job:'leader'
        },
        {
            id:2,
            name:'Kabul',
            job:'leader'
        }
    ]
}
const first_job= data.data[0].job;
console.log(first_job);
const user = {
    id:500,
    name:'Thomas alba edision',
    address:{
        street:{
            first: '35/a kochukhat line',
            second: 'third floor',
            third: "right side",

        },
        postOffice:'cantonment',
        city:"dhaka"
    }
}

const user_floor= user.address.street?.third;
console.log(user_floor);
//optonal chainning is important.