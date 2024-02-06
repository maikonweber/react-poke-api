interface PokemonCardProps {
    name: string;
    url: string;
  }

  const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
    return (
      <div className="flex items-center space-x-4">
        <img src={url} alt={name} className="w-16 h-16" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          {/* You can add more details or styling for the card as needed */}
        </div>
      </div>
    );
  };

  export default PokemonCard;