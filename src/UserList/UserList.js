function UserList (props){

    return props.isLoading ? (<h1>Loading...</h1>) : (props.listOfUSer.map( (item,index)=> (
    <div key={index}>
    <h5 >{item.name} <br/> {item.email} <br/> {item.company.name}</h5>
    </div>
)))
}
export default UserList;