import './colaborador.css';

const Colaborador = ({imagem, nome, cargo, corDeFundo}) => {
return (<div className = 'colaborador'>
    <div className='cabecalho' style = {{backgroundColor: corDeFundo}}>
        <img src= {imagem} alt = {nome}/>
        <div className='rodape'>
        <h4> {nome}</h4>
        <h5> {cargo}</h5> 
        </div>
    </div>
</div>)
}


export default Colaborador;