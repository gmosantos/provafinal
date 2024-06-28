import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


function Put() {

 // const [data, setData] = useState([]);
  const {id} = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
})


  useEffect(() => {
    axios
      .get("https://664ca3ce35bbda1098814439.mockapi.io/id/compras/" + id)
      .then((response) => {
       setValues(response.data)
      })
      .catch(() => {
        console.log("Requisição deu errado");
      });
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (event)=> {
    event.preventDefault();
    axios.put('https://664ca3ce35bbda1098814439.mockapi.io/id/compras/' + id, values)
    .then(res => {
        console.log(res);
        navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-150 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Editar Compra</h1>

    <form onSubmit={handleUpdate}>
    <div className='mb-2'>
        <label htmlFor='produto'>Produto:</label>
        <input type="text" name='produto' className='form-control' placeholder='insira o produto'
        value={values.produto} onChange={e => setValues({...values, produto: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='quantidade'>Quantidade:</label>
        <input type="number" name='quantidade' className='form-control' placeholder='insira o quantidade'
         value={values.quantidade} onChange={e => setValues({...values, quantidade: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='Valor'>Valor:</label>
        <input type="number" name='valor' className='form-control' placeholder='insira o valor'
        value={values.valor} onChange={e => setValues({...values, valor: e.target.value})}/>
    </div>
    <button className='btn btn-primary'>Enviar</button>
    <Link to= "/" className='btn btn-danger ms-3'>Voltar</Link>
    </form>
    </div>
    </div>
  )
}

export default Put