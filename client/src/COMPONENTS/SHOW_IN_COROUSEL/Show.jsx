import { useEffect, useState } from "react";
import axios from "axios";
import ModalHistory from "./Modal";
import Modal from "react-modal";
import styles from "./show.module.css";
import { Link } from "react-router-dom";


Modal.setAppElement('#root');


function Show() {
    const [history, setHistory] = useState([]);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [historyModal, setHistorymodal] = useState();


    const handleClick = (index) => {
        setHistorymodal(history[index]);
        setModalAbierto(true);
    }

    useEffect(() => {
        axios.get('/userPets/acceptStories')
            .then(response => setHistory(response.data))
            .catch(error => console.log(error));
    }, [setHistory])
    return (
        <div className={styles.principal} >

            <h1>Post stories</h1>

            <div className={styles.contTable}>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pet</th>
                            <th>Published</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            history.length
                                ?
                                history.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.user.nickname}</td>
                                            <td>{item.user.email}</td>
                                            <td>{item.pet.name}</td>
                                            <td>{item.show.toString()}</td>
                                            <td><button onClick={() => handleClick(index)} >Show more</button></td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td>Null</td>
                                    <td>Null</td>
                                    <td>Null</td>
                                </tr>
                        }
                        <ModalHistory modalAbierto={modalAbierto} setModalAbierto={setModalAbierto} historyModal={historyModal} />
                    </tbody>
                </table>

            </div>
            <br />
            <Link to={"/Admin"}>
          <button className="bg-blue-500 flex justify-center items-center  text-white px-4 py-3 rounded-md focus:outline-none"> Back</button>
        </Link>
            

        </div>


    )
}

export default Show;