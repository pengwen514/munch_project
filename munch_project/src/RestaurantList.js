const RestaurantList = (props) => {

    const restaurants = props.restaurants

    console.log(props, restaurants)

    return (
        <div className="restaurantList">
            {restaurants.map((restaurant) => (
                <div className="restaurantPreview" key={restaurant.id}>
                    <h2>{restaurant.Name}</h2>
                </div>
                ))}
        </div>
      );
}
 
export default RestaurantList;