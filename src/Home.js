import { Outlet, useParams } from "react-router-dom"

export const Home = () => {
    return <div>
        <div>Home</div>
        <Outlet />
    </div>
}

export const Default = () =>{
    return <div>Default</div>
}

export const ParamsComponent = () =>{
    const {id} = useParams();
    return <div>{`ParamsComponent ${id}`}</div>
}

export const NotFound= () => <div>Not found</div>