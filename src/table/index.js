import React from "react";
import styles from "./table.module.css";
export const TableComponent = () => {
    return (
        <div style={{ userSelect: "none"}}>
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                    <tr> {/*  column */}
                        <td style={{ padding: '30px' }}><strong>Name</strong></td>
                        <td style={{ padding: '30px 60px' }}><strong>Oem</strong></td>
                        <td style={{ padding: '30px 50px' }}><strong>Image</strong></td>
                        <td style={{ padding: '30px 30px' }}><strong>Mapping</strong></td>
                        <td style={{ padding: '30px 40px' }}><strong>Edit</strong></td>
                        <td style={{ padding: '30px 40px' }}><strong>Delete</strong></td>
                    </tr>
                    {/* columnend */}
                    {/* New row 1*/}
                    <tr style={{ borderBottom: '1px solid silver' }}> 


                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px',  }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px"}}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>

                    </tr>




                  {/* row2 */}
  
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
  
                    {/* row3 */}
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
                    {/* row4 */}
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
                    {/* row5 */}
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
  
  
                    {/* row6 */}
  
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
                    {/* row7 */}
  
  
                     
                          <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
                    {/* row8 */}
  
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
                    {/* row9 */}
  
  
                    <tr style={{ borderBottom: '1px solid silver' }}> 

                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>
  
  
                    {/* row10 */}

                    <tr style={{ borderBottom: '1px solid silver' }}> 
                        <td style={{ padding: '8px ' }}>Sidemirror</td>
                        <td style={{ padding: '8px 50px' }}>564643531  </td>
                        <td style={{ padding: '8px 50px', }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYHYcjE4l84vkCJmHxCthnjTj89sV4F4grQ&usqp=CAU" style={{ height: "40px", width: "60px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuPAJuIiHNjm_caay0OJDBYCz26VknrLWuw&usqp=CAU" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" style={{ height: "20px", width: "20px" }}></img> </td>
                        <td style={{ padding: '8px 50px' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GMSlHNvhza4X9lQo0-wi7IbOKb9atxowG29RaxDlhqfBY7QRFS7KAvjObtRrJ8nqC4A&usqp=CAU" style={{ height: "15px", width: "15px" }}></img> </td>
                    </tr>

                
                </tbody>
            </table>
        </div>
    );
};
