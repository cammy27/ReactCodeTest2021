import { userConstants } from '../_constants/userContants';
import userService  from '../_services/userServices';
import { history } from '../_helpers/history';

const authenticate = (values) => {
    return dispatch => {
        dispatch(request(values.username ));
        userService.authenticate(values).then((res) => {
            if(res){
                dispatch(success(values));
                localStorage.setItem('loggedInUser', JSON.stringify(values))
                history.push('/home-page');   
            }
            else{
                dispatch(failure());
                alert("WRONG CREDENTIALS")
            }
        })
    };

    function request(user) { return { type: userConstants.AUTHENTICATE_REQUEST, user } }
    function success(user) { return { type: userConstants.AUTHENTICATE_SUCCESS, user } }
    function failure() { return { type: userConstants.AUTHENTICATE_FAILURE } }
}

const userList = () => {
    return dispatch => {
        dispatch(request());
        userService.userListService().then((res) => {
            if(res){
                dispatch(success(res));
                localStorage.setItem('users', JSON.stringify(res)) 
            }
            else{
                dispatch(failure());
                alert("Oops ! Something went wrong")
            }
        })
    };

    function request() { return { type: userConstants.USERS_LIST_REQUEST, } }
    function success(user) { return { type: userConstants.USERS_LIST_SUCCESS, user } }
    function failure() { return { type: userConstants.USERS_LIST_FAILURE } }
}

const addNewUser = (values) => {
    return dispatch => {
        dispatch(request());
        console.log(JSON.parse(localStorage.getItem("users")));
        userService.addNewUser(values).then((res) => {
            if(res){
                console.log("the added", res)
                dispatch(success(res));
                localStorage.setItem('users', JSON.stringify(res)) 
            }
            else{
                dispatch(failure());
                alert("Oops ! Something went wrong")
            }
        })
    };

    function request() { return { type: userConstants.ADD_NEW_USER_REQUEST, } }
    function success(user) { return { type: userConstants.ADD_NEW_USER__SUCCESS, user } }
    function failure() { return { type: userConstants.ADD_NEW_USER_FAILURE } }
}
 const userActions = {
    authenticate,
    userList,
    addNewUser
}

export default userActions;