using System;

namespace TacoTuesday.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Summary { get; set; }
        public string Body { get; set; }
        public int Stars { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;

        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}