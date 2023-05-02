import Modal from "react-modal";
import styles from "./modal.module.css";
import axios from "axios";

function ModalHistory({ modalAbierto, setModalAbierto, historyModal }) {

    const handleClick = async (data) => {
        try {
            const response = (await axios.post("/userPets/updateShow", {
                post: data,
                idUser: historyModal.userId,
                idPet: historyModal.petId
            })).data

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal isOpen={modalAbierto} onRequestClose={() => setModalAbierto(false)} >

            <div className={styles.principal} >

                {
                    !historyModal
                        ?
                        <h1>Loading...</h1>
                        :
                        <>
                            <div className={styles.encavezado}>
                                <h1>Stories</h1>
                                <button onClick={() => setModalAbierto(false)} >X</button>
                            </div>

                            <div className={styles.tabla} >

                                <div className={styles.superior} >

                                    <div className={styles.izquierda} >
                                        <h1>User information</h1>
                                        <br /><br />
                                        {
                                            historyModal
                                            &&
                                            <table className={styles.tablaUser} >
                                                <thead>
                                                    <tr>
                                                        <th width="150px" >Nickname</th>
                                                        <th>Email</th>
                                                        <th width="100px" >Role</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{historyModal.user.nickname}</td>
                                                        <td>{historyModal.user.email}</td>
                                                        <td>{historyModal.user.role}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        }

                                    </div>

                                    <div className={styles.derecha} >
                                        <h1>Pet information</h1>
                                        <div className={styles.information} >
                                            <img src={historyModal.pet.image} alt="" />
                                            <ul>
                                                <li>Specie : {historyModal.pet.specie}</li>
                                                <br />
                                                <li>Gender :{historyModal.pet.gender}</li>
                                                <br />
                                                <li>Size   :{historyModal.pet.size}</li>
                                                <br />
                                                <li>Weight :{historyModal.pet.weight}Kg</li>
                                            </ul>
                                        </div>
                                        <h2>{historyModal.pet.name}</h2>
                                    </div>

                                </div>

                                <div className={styles.inferior} >
                                    <h1>Story to publish</h1>
                                    <div className={styles.information} >
                                        <img src={historyModal.image} alt="" />
                                        <p>History: {historyModal.history}</p>
                                    </div>
                                    <br />
                                    <hr />
                                    <div className={styles.published} >
                                        <p>Published: {historyModal.show.toString()}</p>

                                        <div className={styles.botones} >
                                            <button onClick={!historyModal.show ? (() => handleClick(true)) : undefined} className={historyModal.show ? styles.ocultar : styles.mostrar} >Post</button>
                                            <button onClick={historyModal.show ? (() => handleClick(false)) : undefined} className={historyModal.show ? styles.mostrar : styles.ocultar} >Remove</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </>

                }



            </div>

        </Modal>
    )
}

export default ModalHistory;