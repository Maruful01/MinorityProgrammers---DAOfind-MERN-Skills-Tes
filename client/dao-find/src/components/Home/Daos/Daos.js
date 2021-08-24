import React, { useState } from 'react';
import DaoDetails from '../../DaoDetails/DaoDetails';
import { useForm } from "react-hook-form";
import './Daos.css'
import { Link } from 'react-router-dom';

const Daos = (props) => {

    const {aum, category, foundDate, img, name, twl, id, _id} = props.daos;

      const [daoDetails, setDaoDetails] = useState (false);

      const [edit, setEdit] = useState (false);
      const daoFindHandler = () => {

        setDaoDetails (true)
        fetch ('https://arcane-atoll-19629.herokuapp.com/edit?id=' + id) 
        .then (res => res.json())
        .then (ans => console.log ("ans", ans))
       }



       const { register, handleSubmit, watch, formState: { errors } } = useForm();
       const onSubmit = data => {
        fetch ('https://arcane-atoll-19629.herokuapp.com/editDao', {
          method: 'POST',
          headers: {'content-type': 'application/json'}, 
          body: JSON.stringify (data)
         })
         .then (res => res.json())
         alert ("Successfully Updated")
       };




    return (
      <section>
          {
               daoDetails ?   
                                 
                                <div>
                                  {
                                    edit ?              <div className="daos-with-details" style={{borderLeft: "2px solid blue"}}>
                                                        <img className="daos-img" src={img} alt="" />
                                                        <form className="edit-form" action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                                                        {
                                                          edit ? <input style={{position: "relative", zIndex: "7"}} type="text" placeholder={name} name="" id=""  {...register("name", { required: true })} /> 
                                                          : <h4 className="border-right"> {name} </h4>
                                                        }

                                                        {
                                                          edit ? <input type="text" placeholder={twl} name="" id=""  {...register("twl", { required: true })} /> 
                                                          : <h4 className="border-right"> {twl} </h4>
                                                        }

                                                        <div>
                                                        {
                                                          edit ? <input style={{display: "none"}} value={_id} name="" id=""  {...register("_id", { required: true })} /> 
                                                          : <h4 className="border-right"> {id} </h4>
                                                        }

{
                                                          edit ? <input type="text" placeholder={id} name="" id=""  {...register("id", { required: true })} /> 
                                                          : <h4 className="border-right"> {id} </h4>
                                                        }




                                                       
                                                        </div>
                                                        <button type="submit" class="btn btn-outline-info">UPDATE</button>
                                                        </form>
                                                        </div>
                                                        :
                                                        <div className="daos-with-details" style={{borderLeft: "2px solid blue"}} onClick={() => setDaoDetails (false)}>
                                                        <img className="daos-img" src={img} alt="" />
                                                        <h4 className="border-right"> {name} </h4>
                                                        <h4 className="border-right">${twl}</h4>
                                                        <div className="grid-three">
                               <h4><i class="fas fa-user"></i> <span>{id}</span></h4>
                               <h6><i class="fas fa-diamond"></i> Ethereum</h6>
                               <div>
                                 <button>{category}</button> <br />
                                 <button>Grants</button>
                               </div>
                               <i class="fas fa-globe"></i>
                               </div>
                                                        </div>
                                  }
                                </div>
 
                        :
                               <div className="daos" onClick={() => daoFindHandler ()}>
                               <img className="daos-img" src={img} alt="" />                           
                               <h4 className="border-right"> {name} </h4>
                               <h4 className="border-right">${twl}</h4>
                               <div className="grid-three">
                               <h4><i class="fas fa-user"></i> <span>{id}</span></h4>
                               <h6><i class="fas fa-diamond"></i> Ethereum</h6>
                               <div>
                                 <button>{category}</button> <br />
                                 <button>Grants</button>
                               </div>
                               <i class="fas fa-globe"></i>
                               </div>
                               </div>   

          }

   {
     daoDetails ?  <DaoDetails dao={props.daos} setEdit={setEdit} edit={edit} /> : ""
   }
            
      </section>
    );
};

export default Daos;