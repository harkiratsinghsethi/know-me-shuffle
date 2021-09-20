let body = 1===2 && { //Remove this in production
    mId: 'req.body.user.meId'
   }


let req = { 
    ...{mId: 'req.body.user.meId'}
};
console.log(
    req
    
)
