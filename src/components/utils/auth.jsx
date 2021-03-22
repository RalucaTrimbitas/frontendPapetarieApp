

const authentication = () => {

    if(localStorage.getItem('userType') === 'administrator')
        return 'administrator';
    else if (localStorage.getItem('userType') === 'client')
        return 'client';
    
    return 'NOT_AUTHENTICATED';

}

export default authentication;