import { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';
import comercios from '../../data/data.json';

export default function List() {
  let apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [list, setList] = useState([]);
//   EL USO DE .THEN() EN FETCH Y AXIOS SE UTILIZA PARA MANEJAR LOS RESULTADOS DE FORMA ASINCRONICA

  useEffect(() => {
    const pedidoApi = () => {
      //       fetch(apiUrl)
      //         .then((response) => {
      //             //DEVUELVE Y RETORNAMOS UNA PROMESA EN FORMATO JSON
      //           return response.json();
      //         })
      //         .then((result) => {
      //             //CON EL RESULTADO DE ESTA MISMA PROMESA, SETEAMOS LA LISTA
      //           setList(result);
      //         })
      //         .catch((error) => {
      //           console.log(error);
      //         });
       axios
        .get(apiUrl)
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => console.warn(error));
    };
    pedidoApi();
  }, []);

  return (
    <div className='claseCinco'>
      <h1>CLASE CINCO</h1>
      <ul>
        {list.map((item, index) => (
          <div key={index}>
            <li>{item.title}</li>
            <li>{item.body}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
