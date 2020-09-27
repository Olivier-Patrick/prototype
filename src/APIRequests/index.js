import { URL } from '../Settings/Server'
import{SuperValue} from '../Menu/index'
var flag=false
export{flag}

function apiReponse(url) {
   if(fetch(url)!=fetch(url)){
       flag=true
        return -1
   }
   flag=false

    return fetch(url)
        .then(res => res.json())
        .then((res) => {
            if (res[0] === null) {
                return 0
            } else {
                return res[0]
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export function consumedEnergy(days) {

    const url = `${URL}/energy/getConsumedEnergy.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[1]
    }

    return apiReponse(url)

}

export function consumedPV(days) {
    const url = `${URL}/energy/getConsumedPV.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[0]
    }
    return apiReponse(url)
}

export function consumedEclairage(days) {
    const url = `${URL}/energy/getConsumedEclairage.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[4]
    }
    return apiReponse(url)
}

export function consumedCVC(days) {
    let url = `${URL}/energy/getConsumedCVC.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[5]
    }
    return apiReponse(url)
}

export function consumedPlugs(days) {
    const url = `${URL}/energy/getConsumedPlugs.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[6]
    }
    return apiReponse(url)
}

export function consumedWater(days) {
    const url = `${URL}/water/getConsumedWater.php?days=${days}`
    if (apiReponse(url)==-1){
        return SuperValue[3]
    }
    return apiReponse(url)
}

export function recycledWater(days) {
    const url = `${URL}/water/getRecycledWater.php?days=${days}`;
    if (apiReponse(url)==-1){
        return SuperValue[2]
    }
    return apiReponse(url)
}

export function airQuality() {
    const url = `${URL}/air/airquality.php`
    if (apiReponse(url)==-1){
        return [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    return fetch(url)
        .then(res => res.json())
        .then((res) => {
            return res
        })
        .catch((error) => {
            // console.log(error)
        });
} 
