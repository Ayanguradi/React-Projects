export function FoodItems(){
    const items=["Biryani","shawarma","Mandi","Lebanese","Kheema"];
    const add=(item) => console.log(`${item} added`)
    return(
        <div>
            {items.map((item,index)=>(
                <div className="d-flex justify-content-between py-1">
                <p key={index}>{item}</p>
                <button type="button" onClick={()=>add(item)} className="btn btn-success">Add</button>
                </div>
                )
            )}

        </div>
    );
}