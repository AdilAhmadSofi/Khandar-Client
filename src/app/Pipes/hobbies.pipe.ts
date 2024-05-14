import { Pipe, PipeTransform } from '@angular/core';
import { Hobbies } from '../Enums/hobbies';

@Pipe({
  name: 'hobbies'
})
export class HobbiesPipe implements PipeTransform {
  transform(value: Hobbies): string {
    switch (value) {
      case Hobbies.None:
        return 'None';
      case Hobbies.Reading:
        return 'Reading';
      case Hobbies.Writing:
        return 'Writing';
      case Hobbies.Painting:
        return 'Painting';
      case Hobbies.Cooking:
        return 'Cooking';
      case Hobbies.Gardening:
        return 'Gardening';
      case Hobbies.Hiking:
        return 'Hiking';
      case Hobbies.Swimming:
        return 'Swimming';
      case Hobbies.Photography:
        return 'Photography';
      case Hobbies.PlayingMusic:
        return 'Playing Music';
      case Hobbies.Dancing:
        return 'Dancing';
      case Hobbies.Fishing:
        return 'Fishing';
      case Hobbies.Cycling:
        return 'Cycling';
      case Hobbies.Traveling:
        return 'Traveling';
      case Hobbies.BirdWatching:
        return 'Bird Watching';
      case Hobbies.Gaming:
        return 'Gaming';
      case Hobbies.Yoga:
        return 'Yoga';
      case Hobbies.Chess:
        return 'Chess';
      case Hobbies.Sculpting:
        return 'Sculpting';
      case Hobbies.Woodworking:
        return 'Woodworking';
      case Hobbies.Knitting:
        return 'Knitting';
      case Hobbies.CollectingCoins:
        return 'Collecting Coins';
      case Hobbies.Astronomy:
        return 'Astronomy';
      case Hobbies.Surfing:
        return 'Surfing';
      case Hobbies.Skiing:
        return 'Skiing';
      case Hobbies.Origami:
        return 'Origami';
      case Hobbies.Baking:
        return 'Baking';
      case Hobbies.Pottery:
        return 'Pottery';
      case Hobbies.Billiards:
        return 'Billiards';
      case Hobbies.Camping:
        return 'Camping';
      case Hobbies.AutoRepair:
        return 'Auto Repair';
      case Hobbies.Calligraphy:
        return 'Calligraphy';
      case Hobbies.ModelBuilding:
        return 'Model Building';
      case Hobbies.BirdKeeping:
        return 'Bird Keeping';
      case Hobbies.Antiquing:
        return 'Antiquing';
      case Hobbies.Volunteering:
        return 'Volunteering';
      case Hobbies.Running:
        return 'Running';
      case Hobbies.TableTennis:
        return 'Table Tennis';
      case Hobbies.ScubaDiving:
        return 'Scuba Diving';
      case Hobbies.Meditation:
        return 'Meditation';
      case Hobbies.HorsebackRiding:
        return 'Horseback Riding';
      case Hobbies.Archery:
        return 'Archery';
      case Hobbies.Juggling:
        return 'Juggling';
      case Hobbies.WineTasting:
        return 'Wine Tasting';
      case Hobbies.KiteFlying:
        return 'Kite Flying';
      case Hobbies.Rowing:
        return 'Rowing';
      case Hobbies.Stargazing:
        return 'Stargazing';
      case Hobbies.Beekeeping:
        return 'Beekeeping';
      case Hobbies.CrosswordPuzzles:
        return 'Crossword Puzzles';
      case Hobbies.StandUpComedy:
        return 'Stand-Up Comedy';
      case Hobbies.ArmWrestling:
        return 'Arm Wrestling';
      default:
        return 'Unknown Hobby';
    }
  }
}
