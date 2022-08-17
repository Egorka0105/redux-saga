import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCatsFetch} from "./redux/slices/firstSagaSlice";
import "./style.scss"


function App() {
    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch]);

    return (
        <div className="app">

            <h1>Cats</h1>
            {cats.map((el)=>{
                return (<div key={el.id} className={"catItem"}>
                    <h3>{el.name}</h3>
                    <img  src={el.image.url}/>
                    <p>{el.description}</p>
                </div>)
            })}
        </div>
    );
}

export default App;
