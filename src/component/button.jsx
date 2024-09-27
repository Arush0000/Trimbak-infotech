import "../Style/button.scss"
function Button1({data,color}){
    return<>
    
            <button class="learn-more">
              <span class="circle" aria-hidden="true" style={{background:color}}>
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">{data}</span>
            </button>
        
    </>
}
export default Button1