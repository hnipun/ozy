import React, {useState} from 'react';

const Form = () => {
    const blankItem = {item: ''};
    const [ItemState, setItemState] = useState([
        {...blankItem}
    ]);

    const addItem = () => {
        setItemState([...ItemState, {...blankItem}]);
    };
    return (
        <form>
            {
                ItemState.map((val, idx) => {
                    const ItemId = `name-${idx}`;
                    return (
                        <div key={`cat-${idx}`}>
                            <label htmlFor={ItemId}>{`Item #${idx + 1}`}</label>
                            <input
                                type="text"
                                name={ItemId}
                                data-idx={idx}
                                id={ItemId}
                            />
                            <input
                                type="button"
                                value="+"
                                onClick={addItem}
                            />
                        </div>
                    );
                })
            }
        </form>
    );
};

export default Form;
