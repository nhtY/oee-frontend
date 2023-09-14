

function ErrorMessage({error}) {

    

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="border border-4 border-danger rounded shadow bg-danger-subtle text-danger p-4 mx-3">
                <h1 className="text-center">Hata</h1>
                <p className="text-start fs-2">Verileri çekerken bir hata oluştu. Bilgi Teknolojileri ekibine bildiriniz.</p>
                <p className="text-start fs-3">Hata mesajı: {error}</p>
            </div>
        </div>
    );

}

export default ErrorMessage;