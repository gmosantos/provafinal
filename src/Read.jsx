import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Read() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios
      .get("https://664ca3ce35bbda1098814439.mockapi.io/id/compras/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("Requisição deu errado");
      });
  }, []);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-100 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detalhes da compra</h3>
        <div className='mb-2'>
          <strong>produto: {data.produto}</strong>
        </div>
        <div className='mb-2'>
          <strong>quantidade: {data.quantidade}</strong>
        </div>
        <div className='mb-2'>
          <strong>valor: {data.valor}</strong>
        </div>
        <Link to={`/put/${id}`} className='btn btn-primary'>Editar</Link>
        <Link to={`/`} className='btn btn-danger ms-3'>Voltar</Link>
      </div>
    </div>
  
  )
}

export default Read