import { Outlet, useParams, useNavigate, useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Home = () => {
    return <div>
        <div>Home</div>
        <Outlet />
    </div>
}

export const Default = () => {
    return <div>Default</div>
}

export const ParamsComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const emails = useSelector((state) => state.emails);
    const navigate = useNavigate();
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    return <div>{`ParamsComponent ${id} ${URLSearchParams.get('key')}`}</div>
}

export const NotFound = () => <div>Not found</div>