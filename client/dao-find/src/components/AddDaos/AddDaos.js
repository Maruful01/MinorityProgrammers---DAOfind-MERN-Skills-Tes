import React from 'react';
import './AddDaos.css';
import { useForm } from "react-hook-form";

const AddDaos = () => {
    const Category = ["Protocol", "Service", "Grant", "Media", "Social", "Investment",  "Platform",  "Platform"];
    const blockchains = ["Ethereum", "Polygon", "Binance Smart Chain", "Harmony", "Solana", "Algorand",  "Stellar",  "NEAR", "IBM Blockchain", "Hyperledger Fabric", "Tezos", "EOSIO", "Waves", "Ripple"];
    const  DaoStructured = ["Shares style which require non-transferable shares given by existing DAO members to join",
                            "Run by governance tokens that you have to buy if you want to participate.",
                            "Not Yet Decided"];

                            const { register, handleSubmit, watch, formState: { errors } } = useForm();
                             const onSubmit = data => {
                              fetch ('http://localhost:5000/addDao', {
                                method: 'POST',
                                headers: {'content-type': 'application/json'}, 
                                body: JSON.stringify (data)
                               })
                               .then (res => res.json())
                               alert ("Successfully Added")
                             };
    return (
        <div>
            <form className="form-div"action="" method="POST" onSubmit={handleSubmit(onSubmit)}>

            <div>
                <h2>DAOfind</h2>
                <p>the only active DAO directory + wiki</p>
                <p className="color-red">*Important</p>
             </div>
                <br />

                <div>
                <p>Email <span className="color-red">*</span></p>
                <input className="text-input" placeholder="Your Answer" type="email" name="" id="" {...register("email", { required: true })} />
                </div>
                <br />
                {errors.firstName?.type === 'required' && "Email name is required"}

                <div>
                <p>Name of DAO<span className="color-red">*</span></p>
                <input className="text-input" placeholder="Your Answer" type="text" name="" id="" {...register("name", { required: true })} />
                </div>
                <br />
                {errors.firstName?.type === 'required' && "Name of DAO is required"}

                <div>
                <p>Date Founded<span className="color-red">*</span></p>
                <input className="text-input" type="date" name="" id="" {...register("Date", { required: true })} />
                </div>
                <br />
                {errors.firstName?.type === 'required' && "date is required"}

          
                <div>
                <p>About your DAO<span className="color-red">*</span></p>
                <input className="text-input" placeholder="Your Answer" type="text" name="" id="" {...register("about", { required: true })} />
                </div>
                <br />

                <div>
                <p>Link to Logo (SVG or PNG preferred) https;//www. only or ipfs</p>
                <input className="text-input" placeholder="Your Answer" type="text" name="" id=""   {...register("img", { required: true })} />
                </div>
                <br />

                <div>
                <p>DAO's twitter @name (include the @) Ex; @minorityprogram</p>
                <input className="text-input" placeholder="Your Answer"  type="text" name="" id="" {...register("twitter", { required: true })} />
                </div>
                <br />


                <div>
                <p>Category<span className="color-red">*</span></p>
                
                 {
                   Category.map (ctg => <label className="c-box"> <input type="checkbox" {...register("category", { required: false })} name="" value={ctg} id="" /> <p>{ctg}</p> </label>)
                 }
                </div>
                <br />

                <div>
                <p>Governance Token Name</p>
                <input className="text-input" placeholder="Your Answer" {...register("GovernanceToken", { required: false })} type="text" name="" id=""/>
                </div>
                <br />

                 <div>
                 <p>Governance Token Symbol</p>
                <input className="text-input" placeholder="Your Answer" {...register("GovernanceSymbol", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                 <p>Github Link for Organization</p>
                <input className="text-input" placeholder="Your Answer" {...register("github", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                <p>Which blockchains does your DAO operate on?</p>
                
                 {
                  blockchains.map (ctg => <label className="c-box"> <input type="checkbox" name="" {...register("ans", { required: false })} value={ctg} id="" /> <p>{ctg}</p> </label>)
                 }
                </div>
                <br />

                <div>
                <p>How is your DAO structured</p>
                
                 {
                  DaoStructured.map (ctg =>  <label className="c-box"> <input type="radio" name="" {...register("structured", { required: false })} value={ctg} id="" /> <p>{ctg}</p> </label>)
                 }
                </div>
                <br />

                <div>
                 <p>How many members does the DAO have?</p>
                <input className="text-input" placeholder="Your Answer" type="text" {...register("voting", { required: false })} name="" id="" />
                </div>
                <br />
                
                <div>
                 <p>How does the voting work?</p>
                <input className="text-input" placeholder="Your Answer" {...register("voting", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                 <p>What is TVL (Total Value Locked)?</p>
                <input className="text-input" placeholder="Your Answer" {...register("twl", { required: false })} type="text" name="" id="" />
                </div>
                <br />


                <div>
                 <p>How is the DAO funded?</p>
                <input className="text-input" placeholder="Your Answer" {...register("founded", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                 <p>What is tech stack? (Frontend, Backend, Hosting)</p>
                <input className="text-input" placeholder="Your Answer" {...register("stack", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                 <p>Governance token address</p>
                <input className="text-input" placeholder="Your Answer" {...register("address", { required: false })} type="text" name="" id="" />
                </div>
                <br />

                <div>
                 <p>Any additional notes</p>
                <input className="text-input" placeholder="Your Answer" {...register("notes", { required: false })} type="text" name="" id="" />
                </div>
                <br />
                 
                  <div className="submit-btn-area">
                  <input className="submit-btn" type="submit" value="Submit" />
                 </div>

            </form>

        </div>
    );
};

export default AddDaos;