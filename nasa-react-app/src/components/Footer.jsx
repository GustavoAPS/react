export default function Footer(props){

    const {handleToggleModal, data } = props

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>Nasa Images App</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}