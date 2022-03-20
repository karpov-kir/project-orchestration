import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTextDto {
  @IsNotEmpty()
  @MaxLength(500)
  title!: string;

  @IsNotEmpty()
  @MaxLength(4000)
  description!: string;

  @IsNotEmpty()
  @MaxLength(4000)
  text!: string;

  @IsBoolean()
  allowShowingFirstLetters = false;

  @IsBoolean()
  allowShowingText = false;
}
