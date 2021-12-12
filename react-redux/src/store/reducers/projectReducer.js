const initState = {
    projects: [
        {id:1,title:"address book",content:"build an addressbook web applicatoin"},
        {id:2,title:"Mario Plan",content:"Mario Plan react+redux+google firebase cloud"},
    ]
};
const projectReducer = (state = initState, action) => {
    return state;
}
export default projectReducer;