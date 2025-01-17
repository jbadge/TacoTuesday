using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TacoTuesday.Models
{
    public class Restaurant
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You must provide a name.")]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required(ErrorMessage = "You must provide an address.")]
        public string Address { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public string Telephone { get; set; }

        public List<Review> Reviews { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}