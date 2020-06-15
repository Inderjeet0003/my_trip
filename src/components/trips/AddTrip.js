import React from 'react';

export const AddTrip = ({newTrip}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            place : place.value,
            type : type.value,
        });
        date.value = place.value = type.value = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <u><h3>Add a trip</h3></u>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    Date: <br/>
                    <input 
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label>
                    Place: <br />
                    <input
                        id="date"
                        type="text"
                        required
                        ref={(input) => place = input} 
                    />
                </label>
                <label>
                    Type: <br />
                    <select ref={(input) => type = input} >
                        <option value="Temple">Temple</option>
                        {/*trem==temple */}
                        <option value="Mountain">Mountain</option>
                        {/* treain==Mountain */}
                        <option value="Club">Club</option>
                    </select>
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}