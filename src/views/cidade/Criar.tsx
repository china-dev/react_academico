export default function CriarCidade () {
    return (
        <div className="display">
            <div className="card animated fadeInDown">
              <h2>Nova cidade</h2>

              <form action="">
                <div className="mb-2 mt-4">
                    <label htmlFor="CodCidade" className="app-label" >
                        Código
                    </label>
                    <input type="text" name="CodCidade" id="CodCidade" />
                </div>
              </form>
            </div>
        </div>
    )
}