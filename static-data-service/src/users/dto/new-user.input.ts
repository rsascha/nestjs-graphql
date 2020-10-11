import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
    @Field()
    @MaxLength(30)
    name: string;

    @Field(type => [String])
    userType: string[];
}
