import {signUpUsers} from "./4-user-promise";
import {uploadPhoto} from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUsers(firstName, lastName), 
    uploadPhoto(fileName)]).then((data) => {
        const resArr = [];

        data.forEach((data) => {
            if (data.status === 'fulfilled') {
                resArr.push({status: data.status, value: data.value});

            } else {
                resArr.push({
                    statis: data.status, value: Error(`${data.reason.message}`),
                });
            }
        });
        return resArr;
    });
}