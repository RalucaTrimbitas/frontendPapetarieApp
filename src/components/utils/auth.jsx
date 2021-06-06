

const authentication = () => {

    if(sessionStorage.getItem('userType') === 'administrator')
        return 'administrator';
    else if (sessionStorage.getItem('userType') === 'client')
        return 'client';
    
    return 'NOT_AUTHENTICATED';

}

export default authentication;