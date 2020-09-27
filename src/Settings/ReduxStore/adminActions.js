
export const mapDispatchToProps = (dispatch) => {
    return {
            //    AdminON: () => dispatch({ type: 'AdminON', value: { status: true, data: { prenom: 'Lorem', nom: 'Ipsum' } } }),

        AdminON: (user, pass) =>
            fetch('http://192.168.1.175:8000/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user,
                    password: pass
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    if (res.user) {
                        return dispatch({ type: 'AdminON', value: { status: true, data: res.user } })
                    }
                }),

        AdminOFF: () => dispatch({ type: 'AdminOFF', value: { status: false, data: null } }),
    }
}
