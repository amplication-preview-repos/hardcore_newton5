/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumShipmentStatus } from "./EnumShipmentStatus";
import { WarehouseWhereUniqueInput } from "../../warehouse/base/WarehouseWhereUniqueInput";

@InputType()
class ShipmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shipmentDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumShipmentStatus,
  })
  @IsEnum(EnumShipmentStatus)
  @IsOptional()
  @Field(() => EnumShipmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  trackingNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => WarehouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WarehouseWhereUniqueInput)
  @IsOptional()
  @Field(() => WarehouseWhereUniqueInput, {
    nullable: true,
  })
  warehouse?: WarehouseWhereUniqueInput | null;
}

export { ShipmentUpdateInput as ShipmentUpdateInput };
