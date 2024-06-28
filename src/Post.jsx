import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Post() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://664ca3ce35bbda1098814439.mockapi.io/id/compras', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
        
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-150 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Adicionar Compra</h1>

    <form onSubmit={handleSubmit}>
    <div className='mb-2'>
        <label htmlFor='produto'>Produto:</label>
        <input type="text" name='produto' className='form-control' placeholder='insira o produto'
        onChange={e => setValues({...values, produto: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='quantidade'>Quantidade:</label>
        <input type="quantidade" name='quantidade' className='form-control' placeholder='insira a quantidade'
         onChange={e => setValues({...values, quantidade: e.target.value})}/>
    </div>
        <div className='mb-2'>
        <label htmlFor='valor'>Valor:</label>
        <input type="valor" name='Valor' className='form-control' placeholder='insira o valor'
         onChange={e => setValues({...values, valor: e.target.value})}/>
    </div>
    <button className='btn btn-primary'>Enviar</button>
    <Link to= "/" className='btn btn-danger ms-3'>Voltar</Link>
    </form>
    </div>
    </div>
  )
}

export default Post