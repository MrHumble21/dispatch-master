const AccordionCustom = ({children}) => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <center>
                        <button
                            style={{
                                backgroundColor:"#FF1E00"
                            }}
                            className="  btn p-3 collapsed fs-1 text-white text-center" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                            See All Categories
                        </button>
                    </center>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                     data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccordionCustom