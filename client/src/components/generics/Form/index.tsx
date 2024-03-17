

import { ChangeEvent, FormEventHandler, useEffect, useRef, useState } from "react"
    import styles from "./index.module.scss"
import { DynamicObject } from "../../../types/generic"
import AssetsAdder from "./AssetsAdder"
import ReCAPTCHA from "react-google-recaptcha"
import InputField from "./InputField"
import Label from "./Label"
import t from "../../../utils/strings/t"
import Button from "../../Button"
import TimedPopup from "../../modals/popups/TimedPopup"

    type options = {
        placeholder?:string,
        min?:number,
        max?:number
    }

    type Field = {
        type?:string,name:string,placeholder?:string,options?:options,selectOptions?:string[],required?:boolean}
    

    type Props = {
        fields:Field[],
        errors?:{field:string,statement:string}[],
        inline?:boolean,
        submitName?:string,
        buttonClass?:string,
        handleSubmit?:Function
        recaptcha?:boolean
        confirmationPopup?:string
        disabled?:boolean
    }

    const Form = ({fields,submitName,inline,buttonClass,handleSubmit,errors,recaptcha,confirmationPopup,disabled}:Props)=>{
        
        
        if(!errors){
            errors = []
        }

        const recaptchaRef = useRef<any>()
        const formValuesFromProps:DynamicObject = {}
        fields.forEach(field=>{
            formValuesFromProps[field.name] = field?.placeholder||""
        })
        const [formValues,setFormValues] = useState(formValuesFromProps)
        const [recaptchaToken,setRecaptchaToken] = useState<string>()
        const [completed,setCompleted] = useState(false)
        const [assets,setAssets] = useState<string[]>([])
        const [isAddingImages,setIsAddingImages] = useState(false)
        const handleInputChange = (e:ChangeEvent<(HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement)>,name:string)=>{
            const newFormValues = {...formValues};
            newFormValues[name] = e.target.value;
            setFormValues(newFormValues)
        }

        const siteKey = '6Lc5GM8jAAAAAPmwXG050-PA7meUyZVbpJ8YUMRs'
        const handleFormSubmit:FormEventHandler = async (e)=>{
            e.preventDefault()
            if(recaptcha&&!recaptchaToken){
                return
            }
            if(recaptcha){
                recaptchaRef.current.reset();
            }
            if(handleSubmit){
                const resp = await handleSubmit({...formValues,assets,recaptchaToken})
                setAssets([])
                if(!resp?.error){

                    setCompleted(true)
                }else{

                    return
                }
            }
            // const newFormValues = {...formValues}
            // for(let field in newFormValues){
            //     newFormValues[field] = ""

            // }
            // setFormValues(newFormValues)
        }

        const updateRecaptchaToken = (token:string|null)=>{
            setRecaptchaToken(token as string)
        }

        useEffect(()=>{
            if(!recaptcha){
                return
            }
            const iframe = document.querySelector('iframe[title="reCAPTCHA"]');
            const recaptchaCont = document.querySelector(".recaptcha-cont")
            if(!recaptchaCont||!iframe){
                return
            }
            const recaptchaFrame = document.querySelector(".recaptcha-cont>div>div")
            if(!recaptchaFrame){
                window.location.reload()
            }
        },[])


        const handleSubmitImage = (url:string)=>{
            setAssets([...assets,url])
            setIsAddingImages(false)
        }
        return(
            <>
            <form className={styles['generic-form']} onSubmit={handleFormSubmit}>
                {fields.map((field,key)=>{
                    const error = errors?.find(err=>(err.field===field.name))  
                    const type =      field?.type||""
                    switch(type){
                        
                        case "dropdown":
                            return  (                              
                            <InputField key={key}>
                            {!inline&&<Label>{t(field.name) }</Label>}
                            <select required={field.required} onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name}>
                                {field.selectOptions?.map((o:string,i:number)=>{
                                    return<option key={i}>{o}</option>
                                })}
                            </select>
                            {error&&<div className="form-error">{t(error?.statement)}</div>}

                            </InputField>)
                        case "number":
                            return(
                                <InputField key={key}>
                                {!inline&&<label>{t(field.name) }</label>}
                                <input required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""} min={field?.options?.min||"0"} max={field?.options?.max||"99999999999999999999"} type={field.type}></input>
                                {error&&<div className="form-error">{t(error?.statement)}</div>}

                                </InputField>
                            );
                            case "image":
                                return(
                                    <div key={key}>
                                    <img src={formValues[field.name]} alt="" />
                                    {!inline&&<label>{t(field.name) }</label>}
                                    <input required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""} min={field?.options?.min||"0"} max={field?.options?.max||"99999999999999999999"} type={field.type}></input>
                                    {error&&<div className="form-error">{t(error?.statement)}</div>}

                                    </div>
                            );
                            case "text":
                                return(
                                    <InputField key={key}>
                                {!inline&&<label>{t(field.name) }</label>}
                                <input required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""} min={field?.options?.min||"0"} max={field?.options?.max||"99999999999999999999"} type={field.type}></input>
                                {error&&<div className="form-error">{t(error?.statement)}</div>}

                                </InputField>
                            )
                            case "email":
                                return(
                                    <InputField key={key}>
                                    {!inline&&<label>{t(field.name) }</label>}
                                    <input required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""} type={field.type}></input>
                                    {error&&<div className="form-error">{t(error?.statement)}</div>}
                                    </InputField>
                                )
                                case "textArea":
                                    return(
                                        <div key={key}>
                                        {!inline&&<label>{t(field.name) }</label>}
                                        <textarea required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""}></textarea>
                                        {error&&<div className="form-error">{t(error?.statement)}</div>}

                                        </div>
                                    )
                                    case "assets":
                                        return(
                                            <div key={key}>
                                                {!inline&&<label>{t(field.name) }</label>}
                                                <AssetsAdder
                                                assets={assets}
                                                setAssets={setAssets}
                                                isAdding={isAddingImages}
                                                setIsAdding={setIsAddingImages}
                                                ></AssetsAdder>
                                            </div>
                                    )
                                    case "termsOfService":
                                        return(
                                            <div className={styles["terms-checkbox"]}>
                                            <input type="checkbox" id="termsOfService" name="termsOfService" required></input>
                                            <label htmlFor="termsOfService">Click here to agree with our <a href="/terms-of-service"    target="_blank">terms of service</a>.</label>
                                        </div>
                                        )
                                    default:
                                        return(
                                            <InputField key={key}>
                                    {!inline&&<label>{t(field.name) }</label>}
                                    <input required={field.required}  onChange={(e)=>handleInputChange(e,field.name)} value={formValues[field.name]} name={field.name} placeholder={field?.options?.placeholder||(inline&&t(field.name))||""} min={field?.options?.min||"0"} max={field?.options?.max||"99999999999999999999"} type={field.type}></input>
                                    {error&&<div className="form-error">{t(error?.statement)}</div>}

                                    </InputField>
                                )
                            }
                        })}
                {!recaptcha?<></>:<div className={styles['recaptcha-cont']}>
                <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={updateRecaptchaToken}
            // size="invisible"
            ></ReCAPTCHA>
</div>}
                    
                <Button disabled={disabled?true:false} className={`${styles['form-submit']} ${buttonClass?buttonClass:""}`}>{submitName||"submit"}</Button>
                {confirmationPopup&&<TimedPopup trigger={completed} message={confirmationPopup}></TimedPopup>}
            </form>
            


{/* May add later */}
            {/* {isAddingImages&&<ImageDropModal setIsDropOpen={setIsAddingImages} handleSubmit={handleSubmitImage}></ImageDropModal>
            } */}
            
            </>
        )
    }
    export default Form
    