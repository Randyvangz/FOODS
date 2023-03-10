import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { getRecipeType, postRecipe } from '../actions';
import { useDispatch } from 'react-redux';
import styles from '../components/styles/recipecreator.module.css';
import pic1 from '../components/pics/K1.jpeg';
import pic4 from '../components/pics/C2.jpeg';
import pic5 from '../components/pics/bugsCocinero.png';

export default function RecipeCreator() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [err, setErr] = useState({});

    function validate(input) {
        let err = {};
        if (!input.name) {
            err.name = "*Name must be filled*";
        }
        if (!input.resume) {
            err.resume = "*Resume must be filled*";
        }
        return err;
    }

    const [input, setInput] = useState({
        name: '',
        resume: '',
        score: '',
        healthylevel: '',
        stepbystep: '',
        image: '',
        diets: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErr(validate({
            ...input,
            [e.target.name]: e.target.value,
    }))
    
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(input))
        alert('Recipe successfully created')
        setInput({
            name: '',
            resume: '',
            score: '',
            healthylevel: '',
            stepbystep: '',
            image: '',
            diets: []
        })
        history.push('/home')
    }

    useEffect(() => { dispatch(getRecipeType()) }, [dispatch]);

    return (
        <div>
            <img className={styles.img1} src={pic1} alt="1"></img>
            <img className={styles.img2} src={pic5} alt="2"></img>
            <img className={styles.img4} src={pic4} alt="3"></img>
            <h1 className={styles.titulo}>CREA TU RECETA</h1>

            <NavLink to='/home'><button className={styles.botn}>Volver a recetas</button></NavLink>
            <form className={styles.formframe} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.n}>
                    <label>Nombre</label>
                    <input className={styles.i1}
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={(e) => handleChange(e)}
                    />
                    {err.name && (<p className={styles.err}>{err.name}</p>)}
                </div>
                <div className={styles.r}>
                    <label>Resumen del plato</label>
                    <input className={styles.i2}
                        type='text'
                        value={input.resume}
                        name='resume'
                        onChange={(e) => handleChange(e)} />
                    {err.resume && (<p className={styles.err2}>{err.resume}</p>)}
                </div>
                <div className={styles.s}>
                    <label>Puntuaci??n</label>
                    <input className={styles.i3}
                        type='number'
                        value={input.score}
                        name='score'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.HS}>
                    <label>Nivel de "comida saludable"</label>
                    <input className={styles.i4}
                        type='number'
                        value={input.healthylevel}
                        name='healthylevel'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.SbS}>
                    <label>Paso a paso</label>
                    <input className={styles.i5}
                        type='text'
                        value={input.stepbystep}
                        name='stepbystep'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.i}>
                    <label>Imagen</label>
                    <input className={styles.i6}
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label className={styles.dtframe}>Tipo de dieta</label>
                    <label className={styles.dtframe2}><input
                        type='checkbox'
                        name='Gluten Free'
                        value='gluten free'
                        onChange={(e) => handleCheck(e)}
                    />Gluten Free</label>
                    <label className={styles.dtframe3}><input
                        type='checkbox'
                        name='Dairy Free'
                        value='dairy free'
                        onChange={(e) => handleCheck(e)}
                    />Dairy Free</label>
                    <label className={styles.dtframe4}><input
                        type='checkbox'
                        name='Lacto Ovo Vegetarian'
                        value='lacto ovo vegetarian'
                        onChange={(e) => handleCheck(e)}
                    /> Lacto Ovo V</label>
                    <label className={styles.dtframe5}><input
                        type='checkbox'
                        name='Vegan'
                        value='vegan'
                        onChange={(e) => handleCheck(e)}
                    />Vegan</label>
                    <label className={styles.dtframe6}><input
                        type='checkbox'
                        name='Paleolithic'
                        value='paleolithic'
                        onChange={(e) => handleCheck(e)}
                    />Paleolithic</label>
                    <label className={styles.dtframe7}><input
                        type='checkbox'
                        name='Primal'
                        value='primal'
                        onChange={(e) => handleCheck(e)}
                    />Primal</label>
                    <label className={styles.dtframe8}><input
                        type='checkbox'
                        name='Pescatarian'
                        value='pescatarian'
                        onChange={(e) => handleCheck(e)}
                    />Pescatarian</label>
                    <label className={styles.dtframe9}><input
                        type='checkbox'
                        name='Fodmap Friendly'
                        value='fodmap friendly'
                        onChange={(e) => handleCheck(e)}
                    />Fodmap Friendly</label>
                    <label className={styles.dtframe10}><input
                        type='checkbox'
                        name='Whole 30'
                        value='whole 30'
                        onChange={(e) => handleCheck(e)}
                    />Whole 30</label>
                </div>
                <button className={styles.btncr} type='submit'>Crear Receta</button>
            </form>
        </div>
    )
}
