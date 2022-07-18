import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <button type="button" onClick={()=>{dispatch({type:'click'})}}>
                Click
            </button>

        </div>
    );
}

export default App;
