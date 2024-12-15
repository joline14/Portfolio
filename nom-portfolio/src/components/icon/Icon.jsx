function Icon ({ src, alt})  {
    return (
        <img src={src} alt={`Icone ${alt}`} className='icon' />
    );
};

export default Icon;