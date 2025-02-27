import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ description: 'Nombre de la transacción', example: 'Pago de alquiler' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Tipo de transacción (Income o Expense)', example: 'Income', enum: ['Income', 'Expense'] })
  @IsEnum(['Income', 'Expense'])
  type: 'Income' | 'Expense';

  @ApiProperty({ description: 'Monto de la transacción', example: 200000 })
  @IsNumber()
  amount: number;

  @ApiPropertyOptional({ description: 'Nota adicional de la transacción', example: 'Pago adelantado de servicios' })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({ description: 'Categoría de la transacción', example: '1' })
  @IsNumber()
  @IsNotEmpty()
  categorizedBudgetId?: number;

  @ApiProperty({ description: 'Fecha de la transacción', example: '2024-12-18T23:59:28.366Z' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
