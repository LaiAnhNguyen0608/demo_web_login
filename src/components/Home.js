import {useState,useEffect} from "react";
import { db } from "../config/firebase";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore";
import Table from 'react-bootstrap/Table';
export const Home = () =>{
    const [newName,setNewName] =useState("");
    const [newAge,setNewAge] =useState(0);

    const [foods,setFoods] =useState([]);
    const foodCollectionRef =collection(db,"foods");
    const createFood = async () => {
        await addDoc(foodCollectionRef,{name:newName,price:Number(newAge)});
    };
    const updateFood = async(id,price)=>{
        const foodDoc=doc(db,"foods",id);
        const newFields={price:price + 500}
        await updateDoc(foodDoc,newFields)
    };
    const deleteFood = async(id) =>{
        const foodDoc=doc(db,"foods",id);
        await deleteDoc(foodDoc);

    }
    useEffect(() =>{
        const getFoods = async ()=>{
            const data =await getDocs(foodCollectionRef);
            setFoods(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getFoods();
    },[]);


    return (  
        <div>
            <br/>
            <input 
                placeholder="Name..." 
                onChange={(e)=>{setNewName(e.target.value);}}
            /><br/><br/>
            <input 
                type="number" 
                placeholder="Price..."
                onChange={(e)=>{setNewAge(e.target.value);}}
            /><br/><br/>
            <button onClick={createFood}>Create Food</button><br/><br/>

            <Table striped border hover>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Option</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                </thead>
            </Table>
            
            {foods.map((food)=>{
                return (
                    <div>
                        {""}
                        <Table striped bordered hover>
                    <tbody>
                        <tr>
                        <td>{food.name}</td>
                        <td>{food.price}</td>
                        <button onClick={()=>{updateFood(food.id,food.price)}}>Increase Price</button>{' '}
                        <button onClick={()=>{deleteFood(food.id)}}>Delete Food</button>
                        </tr>
                    </tbody>
                        </Table>
                    </div>
                );
            })}    



        </div>

        
    )
}