    
const lightenColor = (color, percent) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    const lightenedColor = `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
    return lightenedColor;
  };
 export  const generateColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
        const hexColor = `#${'00000'.substring(0, 6 - c.length)}${c}`;
        const lightenedColor = lightenColor(hexColor, 70); 
  
        return lightenedColor;
       
    };