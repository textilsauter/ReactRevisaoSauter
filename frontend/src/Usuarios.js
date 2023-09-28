import React, { Component } from 'react';
import {variables} from './Variables.js';
import { tsConstructorType } from '@babel/types'
import { format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Usuarios extends Component {
    
    
    // construtor para definir as variveis, usada para chamar o construtor pela sua classe de origem
    constructor(props) {
        super(props);
        // usada para chamar o construtor pela sua classe de origem
        this.state = {
            // populado com dados do API
            users: [],
            // variaveis usadas para janela de modificação
            modalTitle: "",
          
            UserId:0,
            
            UserNumero: "",
            UserRevisao:"",
            UserOperador:"",
            UserProduto:"",
            UserMaquina:"",
            UserMetros:"",
            UserPeso: "",
            UserCliente:"",
            UserNumDefeitos: "",
            UserRefugo:"",
            UserLotes:"",
            UserUrdideira:"",
            UserData_cadastro: new Date(),
           
            // UserData_nascimento: "",
            // UserSobrenome: "",
            // UserEmail: "",
            // UserNome: "",
            // UserId: 0,
            page: 1,    // Initialize page property
            limit: 10,
        }
    }
    // Refresh para pegar os dados do metodo GET da APi e converte para JSON 
    refreshList() {
        const { page, limit } = this.state;
        const offset = (page - 1) * limit;
    
        fetch(variables.API_URL + `?offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                const totalRecords = data.totalRecords;
                const totalPages = Math.ceil(totalRecords / limit); // Use Math.ceil
                console.log('Total Records:', totalRecords);
                console.log('Total Pages:', totalPages);
                this.setState({ users: data, totalRecords, totalPages });
            });
    }
    
    
    

    componentDidMount() {
        this.refreshList();
    }

    // changeUserName =(e)=>{
    //     this.setState({UserNome:e.target.value});
    // }
    
    // changeUserLastName =(e)=>{
    //     this.setState({UserSobrenome:e.target.value});
    // }
    
    // changeUserEmail =(e)=>{
    //     this.setState({UserEmail:e.target.value});
    // }

    // changeUserNascimento =(e)=>{
    //     this.setState({UserData_nascimento:e.target.value});
    // }

    changeUserNumero =(e)=>{
        this.setState({UserNumero:e.target.value});
    }
    changeUserRevisao =(e)=>{
        this.setState({UserRevisao:e.target.value});
    }
    changeUserOperador =(e)=>{
        this.setState({UserOperador:e.target.value});
    }

    changeUserProduto =(e)=>{
        this.setState({UserProduto:e.target.value});
    }
    changeUserMetros =(e)=>{
        this.setState({UserMetros:e.target.value});
    }
    changeUserPeso =(e)=>{
        this.setState({UserPeso:e.target.value});
    }
    changeUserCliente =(e)=>{
        this.setState({UserCliente:e.target.value});
    }
    changeUserNumDefeitos =(e)=>{
        this.setState({UserNumDefeitos:e.target.value});
    }
    changeUserRefugo =(e)=>{
        this.setState({UserRefugo:e.target.value});
    }
    changeUserMaquina =(e)=>{
        this.setState({UserMaquina:e.target.value});
    }
    changeUserLotes =(e)=>{
        this.setState({UserLotes:e.target.value});
    }
    
    changeUserUrdideira =(e)=>{
        this.setState({UserUrdideira:e.target.value});
    }
    changePage = (newPage) => {
        this.setState({ page: newPage }, () => {
            this.refreshList();
        });
    };
    
    
    addClick(use) {
        this.setState({
            modalTitle: "Adicionar Ordem",
            // UserId: "",
            // UserNome: "",
            // UserSobrenome: "",
            // UserEmail: "",
            // UserData_nascimento: "",
            // UserData_cadastro: "",
            UserId: "", 
            UserNumero: "" , 
            UserRevisao: "", 
            UserOperador: "", 
            UserProduto: "", 
            UserMaquina: "", 
            UserMetros: "",
            UserPeso: "",
            UserCliente: "",
            UserNumDefeitos: "",
            UserRefugo: "",
            UserLotes: "",
           

            UserUrdideira:"",             
            UserData_cadastro: "", 
        })
    }

    editClick(use) {
        this.setState({
            modalTitle: "Editar Ordem",
            // UserId: use.UserId,
            // UserNome: use.UserNome,
            // UserSobrenome: use.UserSobrenome,
            // UserEmail: use.UserEmail,
            // UserData_nascimento: use.UserData_nascimento,
            // UserData_cadastro: use.UserData_cadastro,
            UserId: use.UserId,
            UserNumero: use.UserNumero,
            UserRevisao: use.UserRevisao,
            UserOperador: use.UserOperador,
            UserProduto: use.UserProduto,
            
           
            UserMaquina: use.UserMaquina,
         
            UserMetros: use.UserMetros,
            UserPeso: use.UserPeso,
            UserCliente: use.UserCliente,
            UserNumDefeitos: use.UserNumDefeitos,
            UserRefugo: use.UserRefugo,
            UserLotes: use.UserLotes,

            UserUrdideira: use.UserUrdideira,
            UserData_cadastro: use.UserData_cadastro,
    
               
        })
    }

    

  


    createClick() {
     
        fetch(variables.API_URL, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                // UserId: this.state.UserId,
                // UserNome: this.state.UserNome,
                // UserSobrenome: this.state.UserSobrenome,
                // UserEmail: this.state.UserEmail,
                // UserData_nascimento: this.state.UserData_nascimento,
                // UserData_cadastro: this.state.currentDate,
                UserId: this.state.UserId,
                UserNumero: this.state.UserNumero,
                UserRevisao: this.state.UserRevisao,
                UserOperador: this.state.UserOperador,
                UserProduto: this.state.UserProduto,
                
               
                UserMaquina: this.state.UserMaquina,
             
                UserMetros: this.state.UserMetros,
                UserPeso: this.state.UserPeso,
                UserCliente: this.state.UserCliente,
                UserNumDefeitos: this.state.UserNumDefeitos,
                UserRefugo: this.state.UserRefugo,
                UserLotes: this.state.UserLotes,
    
                UserUrdideira: this.state.UserUrdideira,
                UserData_cadastro: this.state.currentDate,
                
                
                 
            }
            )

        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Falha');
            })
    }

    updateClick() {
        fetch(variables.API_URL+'user/'+this.state.UserId, {
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                // UserId: this.state.UserId,
                // UserNome: this.state.UserNome,
                // UserSobrenome: this.state.UserSobrenome,
                // UserEmail: this.state.UserEmail,
                // UserData_nascimento: this.state.UserData_nascimento,
                // UserData_cadastro: this.state.UserData_cadastro,   
                'UserId': this.state.UserId,
                'UserNumero': this.state.UserNumero,
                'UserRevisao': this.state.UserRevisao,
                'UserOperador': this.state.UserOperador,
                'UserProduto': this.state.UserProduto,
                'UserMaquina': this.state.UserMaquina,
                'UserMetros': this.state.UserMetros,
                'UserPeso': this.state.UserPeso,
                'UserCliente': this.state.UserCliente,
                'UserNumDefeitos': this.state.UserNumDefeitos,
                'UserRefugo': this.state.UserRefugo,
                'UserLotes': this.state.UserLotes,    
                'UserUrdideira': this.state.UserUrdideira,
                'UserData_cadastro': this.state.UserData_cadastro,
                
                      
               
                
            })

        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Falha' + error);
            })
    }

      
    deleteClick(pk) {
        if (window.confirm('Tem certeza?')) {
            fetch(variables.API_URL + 'user/' +pk, {
                method: 'DELETE',
          

            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Falha' + error);
                })
        }
    }


    render() {
        // Declaração de variaveis para ser visivel no html
        const {
            users,
            modalTitle,
            UserId,
            // UserNome,
            // UserSobrenome,
            // UserEmail,
            // UserData_nascimento,
            currentDate = new Date(),
            isDate = currentDate,
            page, 
                setPage,
                
                limit,
        } = this.state;
        const totalRecords = users.length; // Assuming users is an array of all records
        const totalPages = Math.ceil(totalRecords / limit);
        
        return (
            
            <div  className="table-responsive-sm">
                <br></br>
                <div className="d-flex justify-content-between">
                <PaginationControl
                        page={page}
                        between={4}
                        total={totalRecords}
                        limit={10}//isso que estava dando erro na ultima pagina estava 20 e ia ate pag13
                        changePage={this.changePage} // Pass the changePage function here
                        ellipsis={1}
                    />
                
                <div className="d-flex justify-content-end">
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>Adicionar Ordem</button>
</div></div>
                    
                    
                <table className='table table-striped '  >
                    <thead>

                        {/* <th>
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Sobrenome
                        </th>
                        <th>
                            email
                        </th>
                        <th>
                            nascimento
                        </th>
                        <th>
                            data_criacao
                        </th> */}

            <th>Id </th> 
            <th>Numero </th> 
            <th>Revisao </th> 
            <th>Operador </th> 
            <th>Produto </th>         
            <th>Maquina </th> 
            <th>Metros </th> 
            <th>Peso </th> 
            <th>Cliente </th> 
            <th>NumDefeitos </th> 
            <th>Refugo </th> 
            <th>Lotes </th> 
            <th>Urdideira </th>             
            <th>Data_cadastro </th>

                    </thead>
                    <tbody>
                    {users.slice((page - 1) * limit, page * limit).map(use =>
                            <tr key={use.UserId}>
                                {/* <td>{use.UserId}</td>
                                <td>{use.UserNome}</td>
                                <td>{use.UserSobrenome}</td>
                                <td>{use.UserEmail}</td>
                                <td>{use.UserData_nascimento}</td>
                                <td>{use.UserData_cadastro}</td> */}
                                <td>{use.UserId}</td> 
                                <td>{use.UserNumero}</td> 
                                <td>{use.UserRevisao}</td> 
                                <td>{use.UserOperador}</td> 
                                <td>{use.UserProduto}</td> 
                                <td>{use.UserMaquina}</td> 
                                <td>{use.UserMetros}</td> 
                                <td>{use.UserPeso}</td> 
                                
                                <td>{use.UserCliente}</td> 
                                <td>{use.UserNumDefeitos}</td> 
                                <td>{use.UserRefugo}</td> 
                                <td>{use.UserLotes}</td> 
                                <td>{use.UserUrdideira}</td> 
                                <td>{format(new Date(use.UserData_cadastro), 'HH:mm:ss dd/MM/yy')}</td>
                                <td>
                                    
                                    <button type="button"
                                        className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.editClick(use)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>

                                    <button type="button"
                                        className="btn btn-light mr-1" onClick={() => this.deleteClick(use.UserId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="True">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    {/* <span className="input-group-text">Nome do Usuario
                                    </span>
                                    <input type="text" className="form-control" placeholder='Nome'
                                        value={users.UserName}
                                        onChange={this.changeUserName}></input>
                                    
                                    <div className="input-group mb-3"></div>
                                    <span className="input-group-text">SobreNome do Usuario</span>
                                    <input type="text" className="form-control" placeholder='Sobrenome'
                                        value={users.UserSobrenome}
                                        onChange={this.changeUserLastName}></input>
                                    <div className="input-group mb-3"></div>
                                    <span className="input-group-text">Email</span>
                                    <input type="text" className="form-control" placeholder='email@email.com'
                                        value={users.UserEmail}
                                        onChange={this.changeUserEmail}></input>
                                    <div className="input-group mb-3"></div>
                                    <span className="input-group-text">Data nascimento</span>
                                    <input type="date" className="form-control" 
                                        value={users.UserData_nascimento}
                                        onChange={this.changeUserNascimento}></input>
                                    
                                     */}
                                     <span className="input-group-text">Numero 
                                    </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserNumero}
                                        value={users.UserNumero}
                                        onChange={this.changeUserNumero}></input>
                                    
                                    
                                    
                                        <span className="input-group-text">Revisadora</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserRevisao}
                                            onChange={this.changeUserRevisao}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Revisadora...</option>
                                            <option value="1">Revisadeira 1 </option>
                                            <option value="2">revisadeira 2</option>
                                            <option value="3">Revisadeira 3</option>
                                            {/* Add more options here */}
                                        </select>
                                  
                                     
                                        <span className="input-group-text">Operador</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserOperador}
                                            onChange={this.changeUserOperador}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione </option>
                                            <option value="Willian">Willian</option>
                                            <option value="Fabricio">Fabricio</option>
                                            <option value="Kaique">Kaique</option>
                                            <option value="Letica">Letica</option>
                                            <option value="Janete">Janete</option>
                                            <option value="Judith">Judith</option>
                                            
                                          
                                            {/* Add more options here */}
                                        </select>
                                    
                                    <div className="input-group mb-3"></div>
                                    
                                    <span className="input-group-text">Produto 
                                    </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserProduto}
                                        value={users.UserProduto}
                                        onChange={this.changeUserProduto}></input>
                                    
                                    
                                 
                                    
                                    
                                    
                                    
                                    <span className="input-group-text">Maquina</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserMaquina}
                                            onChange={this.changeUserMaquina}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Maquina...</option>
                                            <option value="1">M1 </option>
                                            <option value="3">M3</option>
                                            <option value="4">M4</option>
                                            <option value="5">M5 </option>
                                            <option value="6">M6</option>
                                            <option value="7">M7</option>
                                            <option value="8">M8 </option>
                                            <option value="9">M9</option>
                                            <option value="10">M10</option>
                                            <option value="11">M11 </option>
                                            <option value="12">M12</option>
                                            <option value="14">M14</option>
                                            <option value="15">M15 </option>
                                   
                                            {/* Add more options here */}
                                        </select>
                                    
                                        <span className="input-group-text">Metros </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserMetros}
                                        value={users.UserMetros}
                                        onChange={this.changeUserMetros}></input>


                                    <span className="input-group-text">Peso </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserPeso}
                                        value={users.UserPeso}
                                        onChange={this.changeUserPeso }></input>
                                    <div className="input-group mb-3"></div>

                                    <span className="input-group-text">Cliente </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserCliente}
                                        value={users.UserCliente}
                                        onChange={this.changeUserCliente}></input>
                                    

                                    <span className="input-group-text">NumDefeitos </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserNumDefeitos}
                                        value={users.UserNumDefeitos}
                                        onChange={this.changeUserNumDefeitos }></input>
                                   
                                   
                                    <span className="input-group-text">Refugo </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserRefugo}
                                        value={users.UserRefugo}
                                        onChange={this.changeUserRefugo}></input>


                                    <div className="input-group mb-3"></div>
                                    <span className="input-group-text">Lotes </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserLotes}
                                        value={users.UserLotes}
                                        onChange={this.changeUserLotes}></input>

                                    <span className="input-group-text">Urdideira </span>
                                    <input type="text" className="form-control" placeholder={this.state.UserUrdideira}
                                        value={users.UserUrdideira}
                                        onChange={this.changeUserUrdideira}></input>

                                </div> </div>

                            {UserId == 0 ?
                                <button type="button"
                                    className="btn btn-primary float-start" onClick={() => this.createClick()}>Create</button>
                                : null}

                            {UserId != 0 ?
                                <button type="button"
                                    className="btn btn-primary float-start" onClick={() => this.updateClick()}>Update</button>
                                : null}
                        </div> </div>
                        </div>
 
                                
                </div>
           

            

        )
    }
}